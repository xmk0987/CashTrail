"use client";
import { useEffect, useState } from "react";
import CsvUploadMapper from "../components/CSVUploader/CSVUploader";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader/Loader";
import styles from "./Home.module.css";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";

export default function Home() {
  const router = useRouter();
  const [transactionsDataId, setTransactionsDataId] = useState("");

  // Initialize the ID from local storage if present
  useEffect(() => {
    const savedId = localStorage.getItem("transactionsId");
    if (savedId) {
      setTransactionsDataId(savedId);
      router.push(`/${savedId}/dashboard`);
    }
  }, [router]);

  const handleUploadFromComputer = () => {
    console.log("Upload manually");
  };

  const handleBankAuthorization = () => {
    console.log("Spankki authorization");
  };

  return transactionsDataId === "" ? (
    <main className={styles.container}>
      {/*       <CsvUploadMapper setId={setTransactionsDataId} />
       */}
      <h1 className="text-xl text-center">Money Spend Tracker</h1>
      <PrimaryButton
        text="Upload from computer"
        onClick={handleUploadFromComputer}
      />
      <PrimaryButton text="SPankki login" onClick={handleBankAuthorization} />
    </main>
  ) : (
    <Loader />
  );
}
