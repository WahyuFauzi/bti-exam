const skills = ['frontend ', 'backend ', 'desktop-software'];
const dummyData = {
	_id: '52991',
	title: 'Sousou no Frieren',
	alternativeTitles: ["Frieren: Beyond Journey's End", '葬送のフリーレン'],
	ranking: 1,
	genres: ['Adventure', 'Drama', 'Fantasy'],
	episodes: 0,
	hasEpisode: false,
	hasRanking: true,
	image: 'https://cdn.myanimelist.net/images/anime/1015/138006.webp',
	link: 'https://myanimelist.net/anime/52991/Sousou_no_Frieren',
	status: 'Not yet aired',
	synopsis:
		"The demon king has been defeated, and the victorious hero party returns home before disbanding. The four—mage Frieren, hero Himmel, priest Heiter, and warrior Eisen—reminisce about their decade-long journey as the moment to bid each other farewell arrives. But the passing of time is different for elves, thus Frieren witnesses her companions slowly pass away one by one. Before his death, Heiter manages to foist a young human apprentice called Fern onto Frieren. Driven by the elf's passion for collecting a myriad of magic spells, the pair embarks on a seemingly aimless journey, revisiting the places that the heroes of yore had visited. Along their travels, Frieren slowly confronts her regrets of missed opportunities to form deeper bonds with her now-deceased comrades. [Written by MAL Rewrite]",
	thumb:
		'https://cdn.myanimelist.net/r/50x70/images/anime/1015/138006.webp?s=dae28ee9f518202b981dedd9a9a212c3',
	type: 'TV',
};

describe('Testing Pages', () => {
	it('visits about page and check string', () => {
		// basic cypress testing
		cy.visit('/');
		cy.contains('a', 'Dashboard');
		cy.contains('a', 'About Me');

		cy.get('a[href*="about"]').click();

		cy.contains('p', 'Name: Wahyu');
		cy.contains('p', skills.toString());
	});

	it('anime list is visible', () => {
		cy.visit('/');
		cy.get('#anime-list').should('be.visible');
	});

	it('frieren is visible, correct and contain needed class', () => {
		cy.visit('/');

		cy.get('.anime-card:first').should('be.visible');

		// learn to test tailwind class is applicable
		cy.get('.anime-card:first').should('be.visible');
		cy.get('.anime-card:first').should('have.class', 'w-4/5');
		cy.get('.anime-card:first').should('have.class', 'rounded');
		cy.get('.anime-card:first').should('have.class', 'bg-gray-900');

		// learn to test if card has correct information
		cy.get('img').should('have.attr', 'src', `${dummyData.image}`);
		cy.get('img').should('be.visible');
		cy.contains('div', `Title: ${dummyData.title}`).should('be.visible');
		cy.contains('div', `Genres: ${dummyData.genres.toString()}`).should(
			'be.visible'
		);
		cy.contains('div', `Type: ${dummyData.type}`).should('be.visible');
		cy.contains('div', `Synopsis: ${dummyData.synopsis}`).should('be.visible');
	});
});
