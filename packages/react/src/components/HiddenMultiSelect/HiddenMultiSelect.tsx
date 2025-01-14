import type { HiddenMultiSelectProps } from '../../types';
import { useHiddenMultiSelect } from './useHiddenMultiSelect';

export function HiddenMultiSelect<T>(props: HiddenMultiSelectProps<T>) {
  const { state, triggerRef, label, name, isDisabled } = props;
  const { containerProps, inputProps, selectProps } = useHiddenMultiSelect(
    props,
    state,
    triggerRef,
  );

  if (state.collection.size <= 300) {
    return (
      <div {...containerProps}>
        <input {...inputProps} />
        <label>
          {label}
          <select multiple {...selectProps}>
            <option />
            {[...state.collection.getKeys()].map((key) => {
              const item = state.collection.getItem(key);
              if (item.type === 'item') {
                return (
                  <option key={item.key} value={item.key}>
                    {item.textValue}
                  </option>
                );
              }
              return null;
            })}
          </select>
        </label>
      </div>
    );
  }
  if (name) {
    return (
      <>
        {[...state.selectedKeys].map((key) => (
          <input
            key={key}
            multiple
            autoComplete={selectProps.autoComplete}
            disabled={isDisabled}
            name={name}
            type="hidden"
            value={key}
          />
        ))}
      </>
    );
  }

  return null;
}
