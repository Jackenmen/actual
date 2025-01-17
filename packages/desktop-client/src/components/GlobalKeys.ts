import { useEffect } from 'react';

import * as Platform from 'loot-core/src/client/platform';

import useNavigate from '../hooks/useNavigate';

export default function GlobalKeys() {
  const navigate = useNavigate();
  useEffect(() => {
    const handleKeys = e => {
      if (Platform.isBrowser) {
        return;
      }

      if (e.metaKey) {
        switch (e.key) {
          case '1':
            navigate('/budget');
            break;
          case '2':
            navigate('/reports');
            break;
          case '3':
            navigate('/accounts');
            break;
          case ',':
            if (Platform.OS === 'mac') {
              navigate('/settings');
            }
            break;
          default:
        }
      }
    };

    document.addEventListener('keydown', handleKeys);

    return () => document.removeEventListener('keydown', handleKeys);
  }, []);

  return null;
}
