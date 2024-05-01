"use client";
import { useEffect } from "react";

export default function Storage({ url, payload }) {
  useEffect(() => {
    const newDate = new Date();
    const ls = JSON.parse(localStorage.getItem("PrevSearch")) || [];
    if (ls.length === 5) {
      ls.shift();
    }
    const newSearch = {
      id: self.crypto.randomUUID(),
      searchUrl: url,
      data: payload,
      date: `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`,
    };
    localStorage.setItem("PrevSearch", JSON.stringify([...ls, newSearch]));
  }, [url, payload]);

  return null;
}
