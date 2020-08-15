import {Select} from 'antd';
import React from 'react';
import {Station} from './models/Station';
import {OptionData, OptionGroupData, OptionsType} from 'rc-select/lib/interface';

interface StationAutoCompleteProps {
	onChange: (id:number) => void;
	stations: Station[];
	placeholder: string;
}

function toSelectOptions({name, id}: Station): OptionData {
	return {value: name, key: id};
}

type OptionParam = OptionData | OptionGroupData | OptionsType;

export const StationSelect: React.FunctionComponent<StationAutoCompleteProps> = ({onChange, stations, placeholder}): JSX.Element => {
	const onStationChange = (value: string, option: OptionParam): void => {
		onChange((option as OptionData).key as number);
	};
	
	return (
		<Select
			showSearch={true}
			placeholder={placeholder}
			options={stations.map(toSelectOptions)}
			style={{width: '100%'}}
			onChange={onStationChange}
		/>
	);
};
