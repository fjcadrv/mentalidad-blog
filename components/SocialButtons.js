import { useEffect, useState } from 'react';

const ButtonBase = ({
  href,
  onClick,
  disabled,
  ariaLabel,
  className,
  children,
}) => {
  const classes = [
    'flex items-center justify-center w-10 h-10 rounded-full',
    'border border-gray-800/10 bg-white/10',
    'hover:bg-white/20 dark:bg-black/30 dark:hover:bg-black/50',
    'backdrop-blur-lg transition',
    'text-gray-900 dark:text-white',
    disabled ? 'opacity-40 cursor-not-allowed' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  if (href && !disabled) {
    return (
      <a href={href} aria-label={ariaLabel} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type="button" aria-label={ariaLabel} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

const IconWrap = ({ children }) => <span className="inline-flex w-5 h-5">{children}</span>;

const FacebookIcon = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H8.08V12h2.36V9.8c0-2.33 1.4-3.62 3.54-3.62 1.03 0 2.1.18 2.1.18v2.32h-1.18c-1.16 0-1.52.72-1.52 1.46V12h2.59l-.41 2.89h-2.18v6.99A10 10 0 0 0 22 12z" />
    </svg>
  </IconWrap>
);

const XIcon = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.8 7.8L23 22h-6.7l-5.2-6.8L4.6 22H1.5l7.3-8.4L1 2h6.8l4.7 6.2L18.9 2zm-1.2 18h1.8L6.1 4H4.2l13.5 16z" />
    </svg>
  </IconWrap>
);

const LinkedInIcon = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.55c0-1.33-.03-3.05-1.85-3.05-1.85 0-2.13 1.45-2.13 2.95v5.65H9.37V9h3.4v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.34 4.22 5.4v6.34zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  </IconWrap>
);

const WhatsAppIcon = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12 0C5.37 0 .01 5.36.01 12c0 2.11.55 4.13 1.6 5.93L0 24l6.3-1.6A11.96 11.96 0 0 0 12 24c6.63 0 12-5.36 12-12a12 12 0 0 0-3.48-8.52zM12 21.6c-1.6 0-3.16-.42-4.53-1.22l-.31-.18-3.66.93.94-3.57-.2-.33A9.56 9.56 0 0 1 2.4 12c0-5.29 4.31-9.6 9.6-9.6s9.6 4.31 9.6 9.6-4.31 9.6-9.6 9.6z" />
      <path d="M17.5 14.2c-.28-.14-1.65-.8-1.9-.89-.25-.09-.44-.14-.63.14-.19.28-.73.89-.9 1.08-.17.19-.33.22-.61.08-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.56-.46-.48-.63-.49h-.54c-.17 0-.44.07-.67.35-.23.28-.89.87-.89 2.12 0 1.25.91 2.46 1.04 2.63.13.17 1.8 2.79 4.36 3.8 2.56 1 2.56.67 3.02.63.46-.04 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
    </svg>
  </IconWrap>
);

const TelegramIcon = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M21.6 3.2 2.9 10.5c-1 .4-1 1.8.1 2.1l4.8 1.6 1.8 5.6c.3 1 1.6 1.2 2.2.3l2.8-4.1 4.9 3.6c.9.6 2.1.1 2.3-1l3-14.1c.2-1.2-1-2.1-2-1.7zM9 14.1l8.4-6.2c.3-.2.6.2.3.4L10.3 15l-.4 4.7c0 .3-.4.3-.5 0l-.4-5.6z" />
    </svg>
  </IconWrap>
);

const InstagramIcon = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10z" />
      <path d="M12 7.3A4.7 4.7 0 1 0 12 16.7a4.7 4.7 0 0 0 0-9.4zm0 7.7A3 3 0 1 1 12 9a3 3 0 0 1 0 6z" />
      <path d="M17.8 6.2a1.1 1.1 0 1 0-2.2 0 1.1 1.1 0 0 0 2.2 0z" />
    </svg>
  </IconWrap>
);

const YouTubeIcon = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M21.8 8s-.2-1.5-.8-2.2c-.8-.8-1.7-.8-2.1-.9C15.9 4.6 12 4.6 12 4.6h0s-3.9 0-6.9.3c-.4.1-1.3.1-2.1.9C2.4 6.5 2.2 8 2.2 8S2 9.7 2 11.3v1.5C2 14.4 2.2 16 2.2 16s.2 1.5.8 2.2c.8.8 1.9.8 2.4.9 1.7.2 6.6.3 6.6.3s3.9 0 6.9-.3c.4-.1 1.3-.1 2.1-.9.6-.7.8-2.2.8-2.2s.2-1.6.2-3.2v-1.5c0-1.6-.2-3.3-.2-3.3zM10.2 14.5V8.9l5.2 2.8-5.2 2.8z" />
    </svg>
  </IconWrap>
);

const TikTokIcon = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M16.6 2.2c.3 2.3 2 4.1 4.4 4.3v3c-1.5-.1-2.8-.6-4.1-1.4v7.2c0 4-3.3 6.3-6.6 6.3-3.1 0-5.7-2.4-5.7-5.6 0-3.1 2.5-5.6 5.6-5.6.4 0 .8 0 1.2.1v3.2c-.3-.1-.6-.2-1-.2-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3 1.6 0 2.7-1.1 2.7-3V2.2h3.6z" />
    </svg>
  </IconWrap>
);

export function SocialFollowButtons({ social, className }) {
  const followNetworks = [
    { key: 'facebook', label: 'Facebook', url: social?.facebook, icon: <FacebookIcon /> },
    { key: 'x', label: 'X', url: social?.x, icon: <XIcon /> },
    { key: 'linkedin', label: 'LinkedIn', url: social?.linkedin, icon: <LinkedInIcon /> },
    { key: 'whatsapp', label: 'WhatsApp', url: social?.whatsapp, icon: <WhatsAppIcon /> },
    { key: 'telegram', label: 'Telegram', url: social?.telegram, icon: <TelegramIcon /> },
    { key: 'instagram', label: 'Instagram', url: social?.instagram, icon: <InstagramIcon /> },
    { key: 'youtube', label: 'YouTube', url: social?.youtube, icon: <YouTubeIcon /> },
    { key: 'tiktok', label: 'TikTok', url: social?.tiktok, icon: <TikTokIcon /> },
  ];

  return (
    <div className={className ?? 'flex flex-wrap items-center justify-center gap-3'}>
      {followNetworks.map((n) => (
        <ButtonBase
          key={n.key}
          href={n.url || undefined}
          disabled={!n.url}
          ariaLabel={`Síguenos en ${n.label}`}
          onClick={() => {
            // UX: cuando falte config, al menos avisa.
            if (!n.url) alert(`Configura ${n.label} en las variables de entorno (SOCIAL_${n.key.toUpperCase()}_URL).`);
          }}
        >
          {n.icon}
        </ButtonBase>
      ))}
    </div>
  );
}

export function SocialShareButtons({ pageUrl, title, className }) {
  const [resolvedUrl, setResolvedUrl] = useState(pageUrl || '');

  useEffect(() => {
    if (!resolvedUrl && typeof window !== 'undefined') {
      setResolvedUrl(window.location.href);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shareText = title ? `${title}` : 'Artículo';

  const shareNetworks = [
    {
      key: 'facebook',
      label: 'Facebook',
      href: resolvedUrl
        ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(resolvedUrl)}`
        : undefined,
      icon: <FacebookIcon />,
    },
    {
      key: 'x',
      label: 'X',
      href: resolvedUrl
        ? `https://twitter.com/intent/tweet?url=${encodeURIComponent(resolvedUrl)}&text=${encodeURIComponent(shareText)}`
        : undefined,
      icon: <XIcon />,
    },
    {
      key: 'whatsapp',
      label: 'WhatsApp',
      href: resolvedUrl
        ? `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${resolvedUrl}`)}`
        : undefined,
      icon: <WhatsAppIcon />,
    },
    {
      key: 'telegram',
      label: 'Telegram',
      href: resolvedUrl
        ? `https://t.me/share/url?url=${encodeURIComponent(resolvedUrl)}&text=${encodeURIComponent(shareText)}`
        : undefined,
      icon: <TelegramIcon />,
    },
    {
      key: 'instagram',
      label: 'Instagram',
      // Instagram doesn't provide a reliable generic "share URL" for posts/articles.
      // Best-effort: open the Direct message composer with prefilled text.
      href: resolvedUrl
        ? `https://www.instagram.com/direct/new/?text=${encodeURIComponent(`${shareText}\n${resolvedUrl}`)}`
        : undefined,
      icon: <InstagramIcon />,
    },
  ];

  const canShare = Boolean(resolvedUrl);

  const copyLink = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(resolvedUrl);
      } else {
        // Fallback simple.
        const input = document.createElement('input');
        input.value = resolvedUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      alert('Enlace copiado.');
    } catch (e) {
      alert('No se pudo copiar el enlace. Copia manualmente desde la barra de direcciones.');
    }
  };

  return (
    <div className={className ?? 'flex flex-wrap items-center justify-center gap-3'}>
      {shareNetworks.map((n) => (
        <ButtonBase
          key={n.key}
          href={n.href || undefined}
          disabled={!canShare}
          ariaLabel={`Compartir en ${n.label}`}
        >
          {n.icon}
        </ButtonBase>
      ))}

      <ButtonBase
        disabled={!canShare}
        ariaLabel="YouTube (copiar enlace)"
        onClick={() => {
          if (!canShare) return;
          copyLink();
        }}
      >
        <YouTubeIcon />
      </ButtonBase>

      <ButtonBase
        disabled={!canShare}
        ariaLabel="TikTok (copiar enlace)"
        onClick={() => {
          if (!canShare) return;
          copyLink();
        }}
      >
        <TikTokIcon />
      </ButtonBase>
    </div>
  );
}

