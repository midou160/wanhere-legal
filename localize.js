(() => {
  const supported = ['ar', 'en', 'fr'];
  const requested = new URLSearchParams(window.location.search).get('lang')?.toLowerCase();
  const browserLanguage = (navigator.languages?.[0] || navigator.language || '').toLowerCase();
  const language = supported.includes(requested)
    ? requested
    : browserLanguage.startsWith('fr') ? 'fr' : browserLanguage.startsWith('en') ? 'en' : 'ar';
  const isArabic = language === 'ar';
  window.WANHERE_LANGUAGE = language;
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

  const pageNames = {
    ar: { privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام', deletion: 'حذف الحساب', language: 'اللغة' },
    en: { privacy: 'Privacy Policy', terms: 'Terms of Use', deletion: 'Delete account', language: 'Language' },
    fr: { privacy: 'Politique de confidentialité', terms: 'Conditions d’utilisation', deletion: 'Supprimer le compte', language: 'Langue' },
  }[language];

  window.WANHERE_DELETE_COPY = {
    ar: {
      title: 'حذف حساب WanHere',
      description: 'طلب حذف حساب WanHere والبيانات المرتبطة به.',
      intro: 'تستطيع بدء حذف حسابك من هذه الصفحة حتى لو لم يكن التطبيق مثبتًا على جهازك. سنرسل رمز تحقق إلى البريد المسجل في الحساب للتأكد من ملكيته.',
      warningTitle: 'تنبيه:',
      warning: 'بعد تأكيد الحذف، يُحذف الحساب وبياناته ومحتواه المرتبط به وصوره من الخدمة. لا يمكن التراجع عن الحذف.',
      emailLabel: 'البريد الإلكتروني المسجل في WanHere',
      sendCode: 'إرسال رمز التحقق',
      codeLabel: 'رمز التحقق الذي وصلك بالبريد',
      verifyCode: 'التحقق والمتابعة',
      confirmation: 'أفهم أن حذف الحساب والبيانات المرتبطة به نهائي ولا يمكن التراجع عنه.',
      deleteAccount: 'حذف الحساب نهائيًا',
      footerBefore: 'اقرأ ',
      footerAfter: ' لمعرفة البيانات التي تُحذف. إذا تعذر إكمال الطلب، تواصل عبر ',
      errors: {
        connection: 'تعذر الاتصال بخدمة WanHere. حاول لاحقًا.',
        auth: 'تعذر إكمال التحقق. راجع البريد والرمز ثم أعد المحاولة.',
        sendCode: 'تعذر إرسال الرمز. تحقق من الاتصال وحاول لاحقًا.',
        invalidCode: 'أدخل رمز التحقق الذي وصلك بالبريد.',
        verifyAgain: 'تعذر إكمال التحقق. أعد إرسال الرمز وحاول مجددًا.',
        incorrectCode: 'الرمز غير صحيح أو انتهت صلاحيته.',
        cannotDelete: 'تعذر حذف هذا الحساب من هذه الصفحة. تواصل مع دعم WanHere.',
        deleteFailed: 'لم يكتمل الحذف. تحقق من الاتصال وحاول مجددًا.',
      },
      status: {
        sending: 'جارٍ إرسال الرمز...',
        codeSent: 'إذا كان البريد مسجلًا، فسيصلك رمز التحقق عليه.',
        verifying: 'جارٍ التحقق...',
        verified: 'تم التحقق من البريد. راجع التنبيه ثم أكد الحذف إن كنت متأكدًا.',
        deleting: 'جارٍ حذف الحساب والبيانات...',
        deletedTitle: 'تم حذف الحساب',
        deletedBody: 'تم حذف حساب WanHere والبيانات المرتبطة به من الخدمة.',
      },
    },
    en: {
      title: 'Delete your WanHere account',
      description: 'Request deletion of your WanHere account and associated data.',
      intro: 'You can start deleting your account here even if the app is not installed on your device. We will send a verification code to the email address registered to your account.',
      warningTitle: 'Notice:',
      warning: 'After you confirm deletion, your account, associated data, content, and images will be removed from the service. This action cannot be undone.',
      emailLabel: 'Email address registered with WanHere',
      sendCode: 'Send verification code',
      codeLabel: 'Verification code sent to your email',
      verifyCode: 'Verify and continue',
      confirmation: 'I understand that deleting my account and its associated data is permanent and cannot be undone.',
      deleteAccount: 'Permanently delete account',
      footerBefore: 'Read the ',
      footerAfter: ' to learn what is deleted. If you cannot complete the request, contact us at ',
      errors: {
        connection: 'Could not connect to WanHere. Please try again later.',
        auth: 'We could not complete verification. Check your email and code, then try again.',
        sendCode: 'We could not send the code. Check your connection and try again later.',
        invalidCode: 'Enter the verification code sent to your email.',
        verifyAgain: 'We could not complete verification. Request a new code and try again.',
        incorrectCode: 'The code is incorrect or has expired.',
        cannotDelete: 'This account cannot be deleted from this page. Contact WanHere support.',
        deleteFailed: 'Deletion could not be completed. Check your connection and try again.',
      },
      status: {
        sending: 'Sending code...',
        codeSent: 'If this email is registered, a verification code will be sent to it.',
        verifying: 'Verifying...',
        verified: 'Email verified. Read the notice, then confirm deletion if you are sure.',
        deleting: 'Deleting account and data...',
        deletedTitle: 'Account deleted',
        deletedBody: 'Your WanHere account and associated data have been removed from the service.',
      },
    },
    fr: {
      title: 'Supprimer votre compte WanHere',
      description: 'Demander la suppression de votre compte WanHere et des données associées.',
      intro: 'Vous pouvez commencer la suppression de votre compte depuis cette page, même si l’application n’est pas installée. Un code de vérification sera envoyé à l’adresse e-mail associée à votre compte.',
      warningTitle: 'Attention :',
      warning: 'Après confirmation, votre compte, les données associées, les contenus et les images seront supprimés du service. Cette action est irréversible.',
      emailLabel: 'Adresse e-mail associée à WanHere',
      sendCode: 'Envoyer le code de vérification',
      codeLabel: 'Code de vérification reçu par e-mail',
      verifyCode: 'Vérifier et continuer',
      confirmation: 'Je comprends que la suppression de mon compte et des données associées est définitive et irréversible.',
      deleteAccount: 'Supprimer définitivement le compte',
      footerBefore: 'Consultez la ',
      footerAfter: ' pour connaître les données supprimées. Si vous ne pouvez pas terminer la demande, contactez-nous à ',
      errors: {
        connection: 'Impossible de contacter WanHere. Réessayez plus tard.',
        auth: 'La vérification a échoué. Vérifiez votre adresse e-mail et le code, puis réessayez.',
        sendCode: 'Impossible d’envoyer le code. Vérifiez votre connexion et réessayez plus tard.',
        invalidCode: 'Saisissez le code de vérification reçu par e-mail.',
        verifyAgain: 'La vérification a échoué. Demandez un nouveau code et réessayez.',
        incorrectCode: 'Le code est incorrect ou a expiré.',
        cannotDelete: 'Ce compte ne peut pas être supprimé depuis cette page. Contactez l’assistance WanHere.',
        deleteFailed: 'La suppression a échoué. Vérifiez votre connexion et réessayez.',
      },
      status: {
        sending: 'Envoi du code...',
        codeSent: 'Si cette adresse est enregistrée, un code de vérification lui sera envoyé.',
        verifying: 'Vérification...',
        verified: 'Adresse e-mail vérifiée. Lisez l’avis, puis confirmez la suppression si vous êtes sûr.',
        deleting: 'Suppression du compte et des données...',
        deletedTitle: 'Compte supprimé',
        deletedBody: 'Votre compte WanHere et les données associées ont été supprimés du service.',
      },
    },
  };

  const languageNames = [
    ['ar', 'العربية'],
    ['en', 'English'],
    ['fr', 'Français'],
  ];
  const pageLinks = [
    ['index.html', pageNames.privacy],
    ['terms.html', pageNames.terms],
    ['delete-account.html', pageNames.deletion],
  ];

  function addLink(container, href, text, lang) {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = text;
    if (lang) link.lang = lang;
    container.append(link);
  }

  function appendTextWithContactLink(container, text) {
    const address = 'contact@wanhere.net';
    const index = text.indexOf(address);
    if (index < 0) {
      container.append(document.createTextNode(text));
      return;
    }
    container.append(document.createTextNode(text.slice(0, index)));
    addLink(container, `mailto:${address}`, address);
    container.append(document.createTextNode(text.slice(index + address.length)));
  }

  function renderNavigation(nav, includePages = true) {
    nav.replaceChildren();
    nav.setAttribute('aria-label', pageNames.language);
    if (includePages) {
      for (const [file, label] of pageLinks) addLink(nav, `${file}?lang=${language}`, label);
    }
    const separator = document.createElement('span');
    separator.className = 'nav-separator';
    separator.setAttribute('aria-hidden', 'true');
    separator.textContent = '·';
    nav.append(separator);
    for (const [code, label] of languageNames) {
      addLink(nav, `${window.location.pathname.split('/').pop()}?lang=${code}`, label, code);
    }
  }

  function appendLegalFooter(main, kind) {
    const footer = document.createElement('footer');
    const otherPage = kind === 'privacy' ? ['terms.html', pageNames.terms] : ['index.html', pageNames.privacy];
    const deletionPage = ['delete-account.html', pageNames.deletion];
    footer.append('WanHere · ');
    addLink(footer, `${otherPage[0]}?lang=${language}`, otherPage[1]);
    footer.append(' · ');
    addLink(footer, `${deletionPage[0]}?lang=${language}`, deletionPage[1]);
    main.append(footer);
  }

  function renderLegal(main, documentData, kind) {
    const brand = document.createElement('div');
    brand.className = 'brand';
    brand.textContent = 'WanHere';
    const heading = document.createElement('h1');
    heading.textContent = documentData.title;
    const updated = document.createElement('p');
    updated.className = 'updated';
    updated.textContent = documentData.updated;
    const nav = document.createElement('nav');
    nav.className = 'nav';
    renderNavigation(nav);

    const intro = document.createElement('p');
    intro.textContent = documentData.introduction;
    main.replaceChildren(brand, heading, updated, nav, intro);

    for (const section of documentData.sections) {
      const sectionHeading = document.createElement('h2');
      sectionHeading.textContent = section.title;
      main.append(sectionHeading);
      for (const paragraphText of section.paragraphs || []) {
        const paragraph = document.createElement('p');
        appendTextWithContactLink(paragraph, paragraphText);
        main.append(paragraph);
      }
      if (section.bullets?.length) {
        const list = document.createElement('ul');
        for (const bulletText of section.bullets) {
          const item = document.createElement('li');
          item.textContent = bulletText;
          list.append(item);
        }
        main.append(list);
      }
    }
    appendLegalFooter(main, kind);
    document.title = `${documentData.title} | WanHere`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = documentData.introduction;
  }

  function localizeDeletionPage() {
    const copy = window.WANHERE_DELETE_COPY[language];
    document.title = `${copy.title} | WanHere`;
    const description = document.getElementById('page-description');
    if (description) description.content = copy.description;
    const textById = {
      'deletion-title': copy.title,
      'deletion-intro': copy.intro,
      'warning-title': copy.warningTitle,
      'warning-text': copy.warning,
      'email-label': copy.emailLabel,
      'send-code': copy.sendCode,
      'code-label': copy.codeLabel,
      'verify-code': copy.verifyCode,
      'confirm-text': copy.confirmation,
      'delete-button': copy.deleteAccount,
    };
    for (const [id, text] of Object.entries(textById)) {
      const element = document.getElementById(id);
      if (element) element.textContent = text;
    }
    const nav = document.getElementById('legal-nav');
    if (nav) renderNavigation(nav);
    const footer = document.getElementById('deletion-footer');
    if (footer) {
      footer.replaceChildren(document.createTextNode(copy.footerBefore));
      addLink(footer, `index.html?lang=${language}`, pageNames.privacy);
      footer.append(document.createTextNode(copy.footerAfter));
      addLink(footer, 'mailto:contact@wanhere.net', 'contact@wanhere.net');
      footer.append(document.createTextNode('.'));
    }
  }

  const pageFile = window.location.pathname.split('/').pop();
  if (pageFile === 'delete-account.html') {
    localizeDeletionPage();
    return;
  }

  const kind = pageFile === 'terms.html' ? 'terms' : 'privacy';
  fetch('./legal-translations.json', { cache: 'no-cache' })
    .then((response) => {
      if (!response.ok) throw new Error('Could not load legal translations');
      return response.json();
    })
    .then((documents) => renderLegal(document.querySelector('main'), documents[language][kind], kind))
    .catch(() => undefined);
})();
