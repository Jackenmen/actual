import React from 'react';

import { numberFormats } from 'loot-core/src/shared/util';
import {
  Button,
  CustomSelect,
  Text,
  View,
} from 'loot-design/src/components/common';
import { Checkbox } from 'loot-design/src/components/forms';

import { Setting } from './UI';

let dateFormats = [
  { value: 'MM/dd/yyyy', label: 'MM/DD/YYYY' },
  { value: 'dd/MM/yyyy', label: 'DD/MM/YYYY' },
  { value: 'yyyy-MM-dd', label: 'YYYY-MM-DD' },
  { value: 'MM.dd.yyyy', label: 'MM.DD.YYYY' },
  { value: 'dd.MM.yyyy', label: 'DD.MM.YYYY' },
];

export default function FormatSettings({ prefs, savePrefs }) {
  function onDateFormat(format) {
    savePrefs({ dateFormat: format });
  }

  function onNumberFormat(format) {
    savePrefs({ numberFormat: format });
  }

  function onHideFraction(e) {
    let hideFraction = e.target.checked;
    savePrefs({ hideFraction });
  }

  let dateFormat = prefs.dateFormat || 'MM/dd/yyyy';
  let numberFormat = prefs.numberFormat || 'comma-dot';

  return (
    <>
      <Setting
        primaryAction={
          <View
            style={{
              alignItems: 'flex-start',
              gap: '1em',
            }}
          >
            <Button style={{ padding: 0, marginLeft: -5 }}>
              <CustomSelect
                value={numberFormat}
                onChange={onNumberFormat}
                options={numberFormats.map(f => [f.value, f.label])}
                style={{ padding: '5px 10px', fontSize: 15 }}
              />
            </Button>

            <Text style={{ display: 'flex' }}>
              <Checkbox
                id="settings-textDecimal"
                checked={prefs.hideFraction}
                onChange={onHideFraction}
              />
              <label htmlFor="settings-textDecimal">Hide decimal places</label>
            </Text>
          </View>
        }
      >
        <Text>
          <strong>Number format</strong> does not affect how budget data is
          stored and can be changed at any time.
        </Text>
      </Setting>
      <Setting
        primaryAction={
          <Button style={{ padding: 0 }}>
            <CustomSelect
              value={dateFormat}
              onChange={onDateFormat}
              options={dateFormats.map(f => [f.value, f.label])}
              style={{ padding: '5px 10px', fontSize: 15 }}
            />
          </Button>
        }
      >
        <Text>
          <strong>Date format</strong> also does not affect how budget data is
          stored and can be changed at any time.
        </Text>
      </Setting>
    </>
  );
}
