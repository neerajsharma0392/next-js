import img1 from "@/public/img1.jpg";
import Image from "next/image";

export default function ImagePage() {
  return (
    <div>
      <h1>NextJS Image Optimization</h1>
      <div>
        {/* <img src="./img1.jpg" alt="" width={100} height={100} /> */}

        <Image
          src={img1}
          alt="picture"
          //   width={1000}
          //   height={1000}
          //   placeholder="blur"
          layout="responsive"
          quality={90}
        />

        <Image
          src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={700}
          height={400}
          quality={90}
          priority={true}
        />

        <Image
          src="https://images.unsplash.com/photo-1716377239833-54b55d732bc8?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={700}
          height={700}
          loading="eager"
        />

        <Image
          src="https://images.unsplash.com/photo-1525431836161-e40d6846e656?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={700}
          height={400}
          quality={90}
          loading="lazy"
        />
      </div>
    </div>
  );
}
