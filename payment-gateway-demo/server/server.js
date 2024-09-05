const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
const stripe = require("stripe");

const app = express();

dotEnv.config();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

const stripeApi = stripe(process.env.STRIPE_API_KEY);

app.post("/checkout", async (req, res) => {
  var fetchResponse = await fetch("https://fakestoreapi.com/products");
  var products = await fetchResponse.json();
  const requestedProduct = req.body.items;
  const items = new Map();

  for (let i = 0; i < requestedProduct.length; i++) {
    var product = products.find((p) => p.id == requestedProduct[i].id);

    items.set(product.id, {
      priceInCents: product.price * 100,
      name: product.title,
    });
  }

  try {
    const stripeSession = await stripeApi.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: requestedProduct.map((p) => {
        const product = items.get(p.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
            },
            unit_amount: product.priceInCents,
          },
          quantity: p.quantity,
        };
      }),
      success_url: "http://localhost:3000/PaymentSuccess",
      cancel_url: "http://localhost:3000/PaymentCancelled",
    });
    res.json({ url: stripeSession.url });
  } catch (e) {
    console.log(e);
    res.status(500).json({ errorMessage: e.message });
  }
});

app.listen(4000, () => {
  console.log("server listening on port 4000");
});
