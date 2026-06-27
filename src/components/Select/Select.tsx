import * as React from "react";
import { Select as BSelect } from "@base-ui/react/select";
import {
  DropdownFieldStyle,
  SelectItemIndicatorStyle,
  SelectItemStyle,
  SelectItemTextStyle,
  SelectLabelStyle,
  SelectListStyle,
  SelectPopupStyle,
  SelectPositionerStyle,
  SelectScrollArrowStyle,
  SelectTriggerStyle,
  SelectValueStyle,
} from "./Select.css";
import { Check, ChevronDown, ChevronsUpDown } from "lucide-react";

function renderValue(selected: string[]) {
  if (selected.length === 0) {
    return "Filter by store";
  }

  const firstOption = selected[0].replace("_", " ");
  const additionalOptions = selected.length > 1 ? ` (+${selected.length - 1} more)` : "";
  return firstOption + additionalOptions;
}

export function Select<Value, Multiple extends boolean | undefined = false>(
  props: BSelect.Root.Props<Value, Multiple>,
): React.JSX.Element {
  return (
    <div className={DropdownFieldStyle}>
      <BSelect.Root {...props}>
        <BSelect.Trigger className={SelectTriggerStyle}>
          <BSelect.Value className={SelectValueStyle}>
            {renderValue}
          </BSelect.Value>
          <BSelect.Icon>
            <ChevronsUpDown strokeWidth={1.5} size={15} />
          </BSelect.Icon>
        </BSelect.Trigger>
        <BSelect.Portal>
          <BSelect.Positioner
            className={SelectPositionerStyle}
            sideOffset={4}
            alignItemWithTrigger={false}
          >
            <BSelect.Popup className={SelectPopupStyle}>
              <BSelect.List className={SelectListStyle}>
                {Object.entries(props?.items ?? {}).map(([label, value]) => (
                  <BSelect.Item key={label} value={value} className={SelectItemStyle}>
                    <BSelect.ItemIndicator className={SelectItemIndicatorStyle}>
                      <Check strokeWidth={1.5} size='1rem' />
                    </BSelect.ItemIndicator>
                    <BSelect.ItemText className={SelectItemTextStyle}>{label}</BSelect.ItemText>
                  </BSelect.Item>
                ))}
              </BSelect.List>
              <BSelect.ScrollDownArrow className={SelectScrollArrowStyle}>
                <ChevronDown strokeWidth={1.5} />
              </BSelect.ScrollDownArrow>
            </BSelect.Popup>
          </BSelect.Positioner>
        </BSelect.Portal>
      </BSelect.Root>
    </div>
  );
}
