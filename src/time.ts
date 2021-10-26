import { uptime } from 'os';

export const time = () => {
  const t = new Date().toString().split(' ');

  return {
    current: Date.now(),
    uptime: uptime(),
    timezone: (t.length >= 7) ? t[5] : '',
    timezoneName: (t.length >= 7) ? t.slice(6).join(' ').replace(/\(/g, '').replace(/\)/g, '') : ''
  };
};
