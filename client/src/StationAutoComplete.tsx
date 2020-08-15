import {AutoComplete} from 'antd';
import React, {useState} from 'react';
import {Station} from './models/Station';
import {OptionData, OptionGroupData} from 'rc-select/lib/interface';

interface StationAutoCompleteProps {
	onSelect: (id:number) => void;
	stations: Station[];
}

function toAutoCompleteValue({name, id}: Station): OptionData {
	return {value: name, key: id};
}

export const StationAutoComplete: React.FunctionComponent<StationAutoCompleteProps> = ({onSelect, stations}): JSX.Element => {
	const [station, setStation] = useState('');
	const [filteredStation, setFilteredStation] = useState<OptionData[]>(stations.map(toAutoCompleteValue));
	
	const onSearchStation = (searchText: string): void => {
		const filteredStations = filterStations(searchText);
		setFilteredStation(filteredStations);
	};
	
	const onSelectStation = (data: string, option: OptionData | OptionGroupData): void => {
		const filteredStations = filterStations(data);
		setFilteredStation(filteredStations);
		onSelect(option.key as number);
	};
	
	const onChangeStation = (data: string): void => {
		setStation(data);
	};
	
	const filterStations = (searchText: string): OptionData[] => {
		if (searchText === '') return stations.map(toAutoCompleteValue);
		return stations
			.filter(({name}) => name.includes(searchText))
			.map(toAutoCompleteValue);
	};
	
	return (
		<AutoComplete
			value={station}
			options={filteredStation}
			style={{width: '100%'}}
			onSelect={onSelectStation}
			onSearch={onSearchStation}
			onChange={onChangeStation}
			placeholder="To"
		/>
	);
	
};
