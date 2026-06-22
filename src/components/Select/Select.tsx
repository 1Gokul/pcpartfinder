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
import { ArrowUpDownIcon, ChevronsUpDown } from "lucide-react";

const apples = [
  { label: "Gala", value: "gala" },
  { label: "Fuji", value: "fuji" },
  { label: "Honeycrisp", value: "honeycrisp" },
  { label: "Granny Smith", value: "granny-smith" },
  { label: "Pink Lady", value: "pink-lady" },
];

function renderValue(selected: string[]) {
  if (selected.length === 0) {
    return "Filter by store";
  }

  const firstLanguage = selected[0];
  const additionalLanguages = selected.length > 1 ? ` (+${selected.length - 1} more)` : "";
  return firstLanguage + additionalLanguages;
}

export function Select<Value, Multiple extends boolean | undefined = false>(
  props: BSelect.Root.Props<Value, Multiple>,
): React.JSX.Element {
  return (
    <div className={DropdownFieldStyle}>
      <BSelect.Root items={apples} {...props}>
        <BSelect.Trigger className={SelectTriggerStyle}>
          <BSelect.Value className={SelectValueStyle} placeholder="Filter by store">
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
              <BSelect.ScrollUpArrow className={SelectScrollArrowStyle}>
                <CaretUpIcon />
              </BSelect.ScrollUpArrow>
              <BSelect.List className={SelectListStyle}>
                {Object.entries(props?.items ?? {}).map(([label, value]) => (
                  <BSelect.Item key={label} value={value} className={SelectItemStyle}>
                    <BSelect.ItemIndicator className={SelectItemIndicatorStyle}>
                      <CheckIcon />
                    </BSelect.ItemIndicator>
                    <BSelect.ItemText className={SelectItemTextStyle}>{label}</BSelect.ItemText>
                  </BSelect.Item>
                ))}
              </BSelect.List>
              <BSelect.ScrollDownArrow className={SelectScrollArrowStyle}>
                <CaretDownIcon />
              </BSelect.ScrollDownArrow>
            </BSelect.Popup>
          </BSelect.Positioner>
        </BSelect.Portal>
      </BSelect.Root>
    </div>
  );
}

function CaretUpDownIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M11 10H5l3 3.5zm0-4H5l3-3.5z" />
    </svg>
  );
}

function CheckIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="m2.5 8.5 4 4 7-9" />
    </svg>
  );
}

function CaretUpIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M12 10H4l4-4.5z" />
    </svg>
  );
}

function CaretDownIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M12 6H4l4 4.5z" />
    </svg>
  );
}
