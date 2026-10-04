# صفحات WanHere العامة

هذه الملفات مخصصة لموقع GitHub Pages عام صغير يضم سياسة الخصوصية وشروط الاستخدام ونموذج حذف الحساب. لا تضع هنا ملفات `.env` أو مفاتيح `service_role` أو بيانات مستخدمين.

## النشر على GitHub Pages

1. أنشئ مستودعًا عامًا جديدًا باسم `wanhere-legal` في GitHub.
2. من المستودع اختر **Add file → Upload files**، وارفع محتويات هذا المجلد كما هي (الصفحات وملف `styles.css` وملف README).
3. اضغط **Commit changes**.
4. افتح **Settings → Pages**، واختر **Deploy from a branch** ثم الفرع `main` والمجلد `/(root)`، واضغط **Save**.
5. بعد ظهور رابط الموقع، اختبر هذه الصفحات: `/`، و`/terms.html`، و`/delete-account.html`.

قبل وضع رابط الحذف في Google Play، حدّث وظيفة Supabase مرة واحدة:

```text
npx supabase functions deploy account-deletion-web
```

هذه الوظيفة توفر إعدادات Supabase العامة اللازمة لنموذج الحذف. المفتاح الذي ترسله للصفحة هو مفتاح نشر عام (publishable/anon)، وليس `service_role`. لا ترفع ملف `.env` أو أي مفتاح سري إلى GitHub.

أرسل رابط GitHub Pages النهائي بعد ظهوره، وسأربط سياسة الخصوصية وشروط الاستخدام من داخل التطبيق وأتأكد من نموذج الحذف.
