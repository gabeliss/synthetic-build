"use client"

import * as React from "react"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { cn } from "@/lib/utils"

export interface CalendarProps {
  selected?: Date | null
  onChange?: (date: Date | null) => void
  className?: string
  minDate?: Date
  maxDate?: Date
  placeholderText?: string
  dateFormat?: string
}

export function Calendar({
  selected,
  onChange,
  className,
  minDate,
  maxDate,
  placeholderText = "Select date",
  dateFormat = "MMMM d, yyyy",
}: CalendarProps) {
  return (
    <div className={cn("p-3", className)}>
      <ReactDatePicker
        selected={selected}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
        placeholderText={placeholderText}
        dateFormat={dateFormat}
        className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        calendarClassName="!bg-white !rounded-lg !shadow-lg !p-2"
        dayClassName={date => "!rounded-md hover:!bg-accent focus:!bg-accent"}
      />
    </div>
  )
}
