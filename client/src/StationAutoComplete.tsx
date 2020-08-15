import {Select} from 'antd';
import React from 'react';
import {Station} from './models/Station';
import {OptionData} from 'rc-select/lib/interface';

interface StationAutoCompleteProps {
	onChange: (id:number) => void;
	stations: Station[];
	placeholder: string;
}

function toSelectOptions({name, id}: Station): OptionData {
	return {label: name, value: id};
}

export const StationAutoComplete: React.FunctionComponent<StationAutoCompleteProps> = ({onChange, stations, placeholder}): JSX.Element => {
	return (
		<Select
			showSearch={true}
			placeholder={placeholder}
			options={stations.map(toSelectOptions)}
			style={{width: '100%'}}
			onChange={onChange}
		/>
	);
};
