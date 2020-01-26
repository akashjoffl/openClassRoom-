import { tau, meldrum, clara } from './database.js';

const createShowComponents = (show) => {
	const titleText = show.title;
	const seasonsText = show.numberOfSeasons + ' seasons';
	const episodesText = show.episodesPerSeason + ' episodes per season';
	const Component = {
		titleText: titleText,
		seasonsText: seasonsText,
		episodesText: episodesText
    };
    return Component;
};

const tauComponent = createShowComponents(tau);
const meldrumComponent = createShowComponents(meldrum);
const claraComponent = createShowComponents(clara);


const showComponents = [ tauComponent, meldrumComponent, claraComponent ];

export { showComponents };
