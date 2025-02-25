// In ../lib/constants.ts
import { RequiredHeaders } from "@/types/types";

export const REQUIRED_CSV_FIELDS: (keyof RequiredHeaders)[] = [
  "date_created",
  "total",
  "sender",
  "receiverNameOrTitle",
];

export const CSV_FIELD_LABELS: Record<keyof RequiredHeaders, string> = {
  date_created: "Date Created",
  total: "Total",
  sender: "Closest to sender name",
  receiverNameOrTitle: "Closest to receiver name",
};

export const HEADER_MAPPING: { [key: string]: (keyof RequiredHeaders)[] } = {
  // Finnish Headers
  Kirjauspäivä: ["date_created"],
  Summa: ["total"],
  Maksaja: ["sender"],
  Määrä: ["total"],
  "Määrä EUROA": ["total"],
  "Määrä EUR": ["total"],
  Päivämäärä: ["date_created"],

  "Saajan nimi": ["receiverNameOrTitle"],
  Maksunsaaja: ["receiverNameOrTitle"],
  Otsikko: ["receiverNameOrTitle"],
  "Maksaja tai saaja": ["sender", "receiverNameOrTitle"], // Can be sender or receiver
  "Saaja/Maksaja": ["sender", "receiverNameOrTitle"],
};
