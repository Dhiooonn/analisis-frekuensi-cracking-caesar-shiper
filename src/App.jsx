import { useState, useEffect } from "react";
import CipherInput from "./components/CipherInput";
import FrequencyChart from "./components/FrequencyChart";
import FrequencyInfo from "./components/FreequencyInfo";
import SubstitutionPanel from "./components/SubstitutionPanel";
import PlaintextOutput from "./components/PlaintextOutput";
import Navbar from "./components/Navbar";
import EnglishFrequencyInfo from "./components/EnglishFrequencyInfo";
import NgramAnalysis from "./components/NgramAnalysis";     
import { analyzeNgrams } from "./utils/analyzeNgrams";      

export default function App() {
  const [cipherText, setCipherText] = useState("");
  const [analysisData, setAnalysisData] = useState([]);
  const [substitutions, setSubstitutions] = useState({});
  const [plainText, setPlainText] = useState("");


  const [bigramData, setBigramData] = useState([]);
  const [trigramData, setTrigramData] = useState([]);

  const handleResetSubstitutions = () => {
    setSubstitutions({});
    setPlainText("");
  };


  useEffect(() => {
    if (!cipherText) {
      setPlainText("");
      return;
    }

    const decrypted = cipherText
      .split("")
      .map((ch) => {
        const upper = ch.toUpperCase();
        if (substitutions[upper]) {
          return substitutions[upper];
        }
        return ch;
      })
      .join("");

    setPlainText(decrypted);
  }, [cipherText, substitutions]);


  useEffect(() => {
    if (cipherText) {
      setBigramData(analyzeNgrams(cipherText, 2));
      setTrigramData(analyzeNgrams(cipherText, 3));
    } else {
      setBigramData([]);
      setTrigramData([]);
    }
  }, [cipherText]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Navbar />

      <main className="flex-1 p-6 flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2 space-y-6">
          <CipherInput
            cipherText={cipherText}
            setCipherText={setCipherText}
            setAnalysisData={setAnalysisData}
          />
          <FrequencyChart data={analysisData} />
          <EnglishFrequencyInfo />
          <NgramAnalysis bigrams={bigramData} trigrams={trigramData} /> {/* ✅ tampilkan */}
        </div>

        <div className="lg:w-1/2 space-y-6">
          <SubstitutionPanel
            substitutions={substitutions}
            setSubstitutions={setSubstitutions}
            onReset={handleResetSubstitutions}
          />
          <PlaintextOutput text={plainText} />
        </div>
      </main>

      <div className="mx-6 mb-10 mt-0">
        <FrequencyInfo data={analysisData} />
      </div>
    </div>
  );
}
