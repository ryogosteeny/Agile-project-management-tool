import React from 'react';
import { Autocomplete, InputLabel, TextField } from '@mui/material';

export interface Options {
  id: string;
  label: string;
}

interface Props {
  label: string;
  options: Options[];
  onChange: () => void;
  defaultValue?: Options;
}

export const Select = ({ label, options, onChange, defaultValue }: Props) => {
  return (
    <div>
      <InputLabel sx={{ fontWeight: 'bold', color: 'text.primary', display: 'block', mb: 0.5 }}>{label}</InputLabel>
      <Autocomplete
        renderInput={(params) => <TextField {...params} />}
        options={options}
        size="small"
        onChange={onChange}
        defaultValue={defaultValue}
        fullWidth
      />
    </div>
  );
};
