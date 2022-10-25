import { useCallback } from "react";

export const useCookies = () => {
  const str = document.cookie;
  const getAllCookies = useCallback<any>(
    () =>
      str
        .split(";")
        .map((v) => v.split("="))
        .reduce((acc: any, v: any) => {
          acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(
            v[1].trim()
          );
          return acc;
        }, {}),
    [str]
  );

  const getCookieById = useCallback(
    (id: string) => {
      console.log(getAllCookies[id]);
      return getAllCookies[id];
    },
    [getAllCookies]
  );

  return { getAllCookies, getCookieById };
};

// { foo: 'bar', equation: 'E=mc^2' }
