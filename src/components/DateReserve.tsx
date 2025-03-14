"use client";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";

export default function DateReserve() {
  return (
    <div
      className="bg-slate-100 rounded-lg space-x-5  space-y-2
        w-fit px-10 py-5 flex-row justify-center 
    "
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="bg-white" />
      </LocalizationProvider>

      <Select variant="standard" name="location" id="venue" className="h-[2em] w-[200px]">
        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
        <MenuItem value="Spark">Spark Space</MenuItem>
        <MenuItem value="GrandTable">The Grand Table</MenuItem>
      </Select>
    </div>
  );
}
