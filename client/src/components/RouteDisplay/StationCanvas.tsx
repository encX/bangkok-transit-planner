import React, {FC} from 'react';

import './StationCanvas.scss';

interface StationCanvasProps {
	mode: 'start' | 'middle' | 'end';
	color?: string;
}

export const StationCanvas: FC<StationCanvasProps> = ({mode, color}): JSX.Element => {
	return (
		<div className="station-canvas">
			<div className={`station-canvas--top station-canvas--top-${mode}`} style={{backgroundColor: color}}/>
			<div className={`station-canvas--bottom station-canvas--bottom-${mode}`} style={{backgroundColor: color}}/>
			<div className="station-canvas--dot" style={{borderColor: color}}/>
		</div>
	);
};
