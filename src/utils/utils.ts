import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export const formatTime = (time: number) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return "00:00";
};

export const getImageUrl = (image: any) => {
  if (image) {
    if (image.formats?.large?.url) {
      return `${STRAPI_URL}${image.formats.large.url}`;
    } else if (image.formats?.medium?.url) {
      return `${STRAPI_URL}${image.formats.medium.url}`;
    } else if (image.url) {
      return `${STRAPI_URL}${image.url}`;
    }
  }
  return `${STRAPI_URL}${image.url}`;
};

export const getBlurDataUrl = (image: any) => {
  if (image) {
    if (image.formats?.thumbnail?.url) {
      return `${STRAPI_URL}${image.formats.thumbnail.url}`;
    } else if (image.formats?.small?.url) {
      return `${STRAPI_URL}${image.formats.small.url}`;
    }
  }
};

export function formatDate(dateString: string) {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const parts = dateString.split("-");
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);

  const date = new Date(year, month, day);

  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}
