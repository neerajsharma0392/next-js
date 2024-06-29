import { withIronSession } from "next-iron-session";

export function withSession(handler) {
  return withIronSession(handler, {
    cookieName: "CookieCreatedByIronSessionForNextJsApp",
    password: "ThisPasswordIs32CharacterLongAddingExtraCharacter",
    cookieOptions: {
      secure: false,
    },
  });
}
