// src/components/ui/UserGuide.tsx
import { Text, Heading, Code, Box } from "@chakra-ui/react";

const UserGuideContent = () => (
  <>
    <Heading size="md" mt={4}>
      🧭 قدم اول: نمودار را جداگانه باز کنید
    </Heading>
    <Text mt={2}>
      این ابزار نمودار داخلی ندارد. شما باید یک نمودار معتبر (مثلاً TradingView،
      Binance یا هر پلتفرم دیگر) را باز کنید و تایم‌فریم ۴ ساعته (یا تایم‌فریم
      دلخواه) را انتخاب نمایید. با استفاده از اندیکاتور{" "}
      <strong>Elliott Wave</strong> امواج را مشاهده کنید. به دنبال یک حرکت{" "}
      <strong>ایمپالس ۵ موجی</strong> باشید و دو موج اول را شناسایی کنید:
    </Text>
    <Box as="ul" pl={4} mt={2} mb={4}>
      <Box as="li" mb={1}>
        <strong>موج ۱</strong>: یک موج صعودی (در روند صعودی) یا نزولی (در روند
        نزولی)
      </Box>
      <Box as="li" mb={1}>
        <strong>موج ۲</strong>: اصلاح بعد از موج ۱
      </Box>
    </Box>

    <Heading size="md" mt={6}>
      ✍️ قدم دوم: خواندن قیمت‌ها از نمودار
    </Heading>
    <Text mt={2}>دقیقاً سه قیمت زیر را با ماوس از روی نمودار بخوانید:</Text>
    <Box as="ul" pl={4} mt={2} mb={4}>
      <Box as="li" mb={1}>
        <strong>قیمت شروع موج ۱</strong> – پایین‌ترین نقطه‌ای که موج ۱ از آن
        آغاز شده.
      </Box>
      <Box as="li" mb={1}>
        <strong>قیمت پایان موج ۱</strong> – بالاترین نقطه‌ی موج ۱ (یا پایین‌ترین
        در روند نزولی).
      </Box>
      <Box as="li" mb={1}>
        <strong>قیمت پایان موج ۲</strong> – جایی که اصلاح موج ۲ تمام شده
        (معمولاً یک کف در روند صعودی).
      </Box>
    </Box>
    <Box mt={2} p={3} bg="whiteAlpha.100" borderRadius="md" mb={4}>
      <Text>🔹 مثال:</Text>
      <Text>
        شروع موج ۱ = <Code>0.15000</Code>
      </Text>
      <Text>
        پایان موج ۱ = <Code>0.18000</Code>
      </Text>
      <Text>
        پایان موج ۲ = <Code>0.16400</Code>
      </Text>
    </Box>

    <Heading size="md" mt={6}>
      ⏱️ قدم سوم: تشخیص چرخه زمانی (اختیاری)
    </Heading>
    <Text mt={2}>
      اگر با چرخه‌های زمانی آشنا هستید، می‌توانید پارامترهای زیر را نیز وارد
      کنید. در غیر این صورت این دو فیلد را خالی بگذارید (فقط سیگنال نهایی ممکن
      است قرمز بماند).
    </Text>
    <Box as="ul" pl={4} mt={2} mb={4}>
      <Box as="li" mb={1}>
        <strong>Last Cycle Low</strong>: تاریخ و ساعت آخرین کف مهم چرخه (مثال:
        2026-05-20 08:00)
      </Box>
      <Box as="li" mb={1}>
        <strong>Cycle Length</strong>: تعداد کندل‌های ۴ ساعته یک چرخه کامل
        (مثال: 30)
      </Box>
    </Box>

    <Heading size="md" mt={6}>
      🧮 قدم چهارم: وارد کردن اعداد در ابزار
    </Heading>
    <Box as="ul" pl={4} mt={2} mb={4}>
      <Box as="li" mb={1}>
        بخش <strong>📊 Wave Structure</strong>: سه قیمت موج را وارد کنید.
      </Box>
      <Box as="li" mb={1}>
        بخش <strong>⏱️ Time Cycle</strong>: تاریخ کف چرخه و طول چرخه را وارد
        کنید.
      </Box>
      <Box as="li" mb={1}>
        دکمه‌ی <strong>محاسبه (Calculate)</strong> را کلیک کنید.
      </Box>
    </Box>

    <Heading size="md" mt={6}>
      📊 قدم پنجم: خواندن نتایج
    </Heading>
    <Text mt={2}>پس از کلیک، کادر نتایج ظاهر می‌شود:</Text>
    <Box as="ul" pl={4} mt={2} mb={4}>
      <Box as="li" mb={1}>
        <strong>سطوح فیبوناچی</strong> – مهم‌ترین سطح ۶۱.۸٪
      </Box>
      <Box as="li" mb={1}>
        <strong>اعتبارسنجی نئو ویو</strong> – اگر موج ۲ بیشتر از ۶۱.۸٪ اصلاح
        نکرده باشد ✅
      </Box>
      <Box as="li" mb={1}>
        <strong>اهداف قیمتی</strong> – 1.618 و 2.618 extensions
      </Box>
      <Box as="li" mb={1}>
        <strong>حد ضرر</strong> – کمی پایین‌تر از کف موج ۲
      </Box>
      <Box as="li" mb={1}>
        <strong>پیش‌بینی چرخه</strong> – تاریخ کف چرخه بعدی و پنجره فعال
      </Box>
      <Box as="li" mb={1}>
        <strong>سیگنال معاملاتی</strong> – LONG فقط وقتی هر سه شرط برقرار باشد
      </Box>
      <Box as="li" mb={1}>
        <strong>فرمول‌ها</strong> – نمایش ریاضی برای شفافیت
      </Box>
    </Box>

    <Heading size="md" mt={6}>
      ⚠️ نکات بسیار مهم
    </Heading>
    <Box as="ul" pl={4} mt={2} mb={4}>
      <Box as="li" mb={2}>
        این ابزار یک <strong>ماشین‌حساب کمکی</strong> است، نه ربات معامله‌گر.
      </Box>
      <Box as="li" mb={2}>
        تحلیل نهایی و مسئولیت تصمیم‌گیری بر عهده‌ی خود شماست.
      </Box>
      <Box as="li" mb={2}>
        همیشه قبل از ورود، رفتار قیمت (کندل‌ها، حجم) را بررسی کنید.
      </Box>
      <Box as="li" mb={2}>
        اعداد وارد شده باید دقیقاً مطابق نمودار باشند.
      </Box>
      <Box as="li" mb={2}>
        در صورت عدم تطابق با قوانین نئو، شمارش امواج خود را بازبینی کنید.
      </Box>
    </Box>

    <Heading size="md" mt={6}>
      🧪 یک مثال عملی
    </Heading>
    <Box mt={2} p={3} bg="whiteAlpha.100" borderRadius="md" mb={6}>
      <Text>
        شروع موج ۱: <Code>0.15000</Code>
      </Text>
      <Text>
        پایان موج ۱: <Code>0.18000</Code>
      </Text>
      <Text>
        پایان موج ۲: <Code>0.16400</Code>
      </Text>
      <Text>
        کف چرخه: <Code>2026-06-01 00:00</Code>
      </Text>
      <Text>
        طول چرخه: <Code>30</Code> کندل
      </Text>
      <Text mt={2}>نتیجه: سطح ۶۱.۸٪ = 0.16146 ← ✅ Neo Valid</Text>
      <Text>اهداف: 0.18854 و 0.21854 | حد ضرر: 0.16250</Text>
      <Text>در صورت فعال بودن پنجره ← 🟢 LONG</Text>
    </Box>
  </>
);

export default UserGuideContent;
