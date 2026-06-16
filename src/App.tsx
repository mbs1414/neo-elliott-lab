// src/App.tsx
import { useState } from "react";
import {
  Box,
  Input,
  Text,
  Heading,
  Card,
  Button,
  Container,
} from "@chakra-ui/react";
import Navbar from "./components/ui/Navbar";

// کامپوننت ورودی
const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) => (
  <Box mb={4}>
    <Text mb={1} fontWeight="bold">
      {label}
    </Text>
    <Input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      bg="whiteAlpha.200"
      _hover={{ bg: "whiteAlpha.300" }}
      _focus={{ bg: "whiteAlpha.300", borderColor: "blue.500" }}
    />
  </Box>
);

const App = () => {
  const [wave1Start, setWave1Start] = useState("");
  const [wave1End, setWave1End] = useState("");
  const [wave2End, setWave2End] = useState("");
  const [lastCycleLow, setLastCycleLow] = useState("");
  const [cycleLengthBars, setCycleLengthBars] = useState("");

  const [result, setResult] = useState<any>(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  const calculate = () => {
    const w1s = parseFloat(wave1Start);
    const w1e = parseFloat(wave1End);
    const w2e = parseFloat(wave2End);
    const cycleBars = parseInt(cycleLengthBars, 10);

    if (isNaN(w1s) || isNaN(w1e) || isNaN(w2e)) {
      alert("لطفاً همه اعداد موج را وارد کنید");
      return;
    }

    const fibLevels = [0.382, 0.5, 0.618, 0.786];
    const retracements = fibLevels.map((level) => ({
      level: `${level * 100}%`,
      price: (w1e - (w1e - w1s) * level).toFixed(6),
    }));

    const retrace61_8 = w1e - (w1e - w1s) * 0.618;
    const isNeoValid = w2e >= retrace61_8;
    const wave1Length = Math.abs(w1e - w1s);
    const target1618 = (w2e + wave1Length * 1.618).toFixed(6);
    const target2618 = (w2e + wave1Length * 2.618).toFixed(6);
    const stopLoss = (w2e - wave1Length * 0.05).toFixed(6);

    let nextCycleLow: string | null = null;
    let isCycleWindowActive = false;
    if (lastCycleLow && cycleBars > 0) {
      const lastDate = new Date(lastCycleLow);
      const cycleMs = cycleBars * 4 * 60 * 60 * 1000;
      const nextDate = new Date(lastDate.getTime() + cycleMs);
      nextCycleLow = nextDate.toLocaleString();
      const now = new Date();
      const diffMs = Math.abs(now.getTime() - nextDate.getTime());
      isCycleWindowActive = diffMs <= 4 * 60 * 60 * 1000;
    }

    const near618 = Math.abs(w2e - retrace61_8) / wave1Length < 0.03;
    const signalLong = isNeoValid && near618 && isCycleWindowActive;

    setResult({
      retracements,
      retrace61_8,
      isNeoValid,
      target1618,
      target2618,
      stopLoss,
      nextCycleLow,
      isCycleWindowActive,
      near618,
      signalLong,
      wave1Length,
      w1s,
      w1e,
      w2e,
    });
    setHasCalculated(true);
  };

  return (
    <Box display="flex" flexDirection="column" minH="100vh">
      <Navbar />

      {/* محتوای اصلی */}
      <Container maxW="container.md" py={8} flex="1">
        <Heading size="lg" mb={6} textAlign="center">
          🧠 NeoCycle Dashboard
        </Heading>

        {/* ورودی‌ها */}
        <Card.Root mb={4} variant="outline">
          <Card.Body>
            <Heading size="md" mb={2}>
              📊 Wave Structure
            </Heading>
            <InputField
              label="Wave 1 Start Price"
              value={wave1Start}
              onChange={setWave1Start}
              placeholder="e.g. 0.15000"
            />
            <InputField
              label="Wave 1 End Price"
              value={wave1End}
              onChange={setWave1End}
              placeholder="e.g. 0.18000"
            />
            <InputField
              label="Wave 2 End Price"
              value={wave2End}
              onChange={setWave2End}
              placeholder="e.g. 0.16500"
            />
          </Card.Body>
        </Card.Root>

        <Card.Root mb={4} variant="outline">
          <Card.Body>
            <Heading size="md" mb={2}>
              ⏱️ Time Cycle
            </Heading>
            <InputField
              label="Last Cycle Low (date & time)"
              value={lastCycleLow}
              onChange={setLastCycleLow}
              placeholder="2026-05-20T08:00"
              type="datetime-local"
            />
            <InputField
              label="Cycle Length (4H bars)"
              value={cycleLengthBars}
              onChange={setCycleLengthBars}
              placeholder="e.g. 30"
              type="number"
            />
          </Card.Body>
        </Card.Root>

        {/* دکمه محاسبه */}
        <Button colorScheme="blue" width="full" mb={6} onClick={calculate}>
          (Calculate)
        </Button>

        {/* نتایج */}
        {hasCalculated && result && (
          <Card.Root variant="outline">
            <Card.Body>
              <Heading size="md" mb={2}>
                📐 Fibonacci Retracements
              </Heading>
              {result.retracements.map((r: any) => (
                <Text key={r.level}>
                  <strong>{r.level}</strong>: {r.price}
                </Text>
              ))}

              {/* فرمول‌ها */}
              <Box mt={4} p={3} bg="whiteAlpha.100" borderRadius="md">
                <Text fontWeight="bold">📝 فرمول‌ها:</Text>
                <Text>
                  Retracement = Wave1End - (Wave1End - Wave1Start) × Level
                </Text>
                <Text>
                  61.8% = {result.retrace61_8.toFixed(6)} = {result.w1e} - (
                  {result.w1e} - {result.w1s}) × 0.618
                </Text>
                <Text>
                  Target 1.618 = Wave2End + (Wave1Length × 1.618) ={" "}
                  {result.target1618}
                </Text>
                <Text>
                  Target 2.618 = Wave2End + (Wave1Length × 2.618) ={" "}
                  {result.target2618}
                </Text>
                <Text>
                  Stop Loss = Wave2End - (Wave1Length × 0.05) ={" "}
                  {result.stopLoss}
                </Text>
              </Box>

              <Heading size="md" mt={4} mb={2}>
                ⚖️ Neo Wave Validation
              </Heading>
              <Text
                color={result.isNeoValid ? "green.400" : "red.400"}
                fontWeight="bold"
              >
                {result.isNeoValid
                  ? "✅ Wave 2 retrace ≤ 61.8% – Valid"
                  : "❌ Wave 2 retrace > 61.8% – INVALID"}
              </Text>

              <Heading size="md" mt={4} mb={2}>
                🎯 Targets (extensions)
              </Heading>
              <Text>
                1.618: <strong>{result.target1618}</strong>
              </Text>
              <Text>
                2.618: <strong>{result.target2618}</strong>
              </Text>

              <Heading size="md" mt={4} mb={2}>
                🛑 Stop Loss
              </Heading>
              <Text>{result.stopLoss}</Text>

              {result.nextCycleLow && (
                <>
                  <Heading size="md" mt={4} mb={2}>
                    🔄 Cycle Projection
                  </Heading>
                  <Text>Next low: {result.nextCycleLow}</Text>
                  <Text
                    color={
                      result.isCycleWindowActive ? "green.400" : "orange.400"
                    }
                  >
                    {result.isCycleWindowActive
                      ? "⏰ Window ACTIVE (±4h)"
                      : "⌛ Not yet active"}
                  </Text>
                </>
              )}

              <Heading size="md" mt={4} mb={2}>
                📈 Trade Signal
              </Heading>
              <Box
                p={3}
                borderRadius="md"
                bg={result.signalLong ? "green.700" : "red.700"}
                color="white"
                fontWeight="bold"
              >
                {result.signalLong
                  ? "🟢 LONG – Neo valid, 0.618 zone, cycle active"
                  : "🔴 No confirmed signal"}
              </Box>
            </Card.Body>
          </Card.Root>
        )}
      </Container>
    </Box>
  );
};

export default App;
