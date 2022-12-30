// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'El Che',
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '0c9ef1fe970f17f939c1e390dcf00e2e', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '45.3050',
	defaultLongitude: '21.8821',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Unraid',
			icon: 'server',
			link: 'https://192-168-1-66.62e5271c161ffcc722a531791cae2434435254f6.myunraid.net/',
		},
		{
			id: '2',
			name: 'ProxmoxVE',
			icon: 'network',
			link: 'https://moxy.elche.us/',
		},
		{
			id: '3',
			name: 'Proxmox Backup Server',
			icon: 'ghost',
			link: 'https://pmbs.elche.us/',
		},
		{
			id: '4',
			name: 'CasaOS',
			icon: 'home',
			link: 'https://heimdall.elche.us/',
		},
		{
			id: '5',
			name: 'Portainer Debian-Hades',
			icon: 'flame',
			link: 'https://portainer-debian.elche.us/',
		},
		{
			id: '6',
			name: 'Home Assistant',
			icon: 'bot',
			link: 'https://epl49mx5u6oj38y4mw7cgxafozm0iwps.ui.nabu.casa/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'GitHub',
			icon: 'github',
			link: 'https://github.com/gaodesergiu',
		},
		{
			id: '2',
			name: 'Cloudflare',
			icon: 'clouds',
			link: 'https://dash.cloudflare.com/',
		},
		{
			id: '3',
			name: 'Organizr',
			icon: 'layers',
			link: 'https://organizr.elche.us/',
		},
		{
			id: '4',
			name: 'Overseerr',
			icon: 'film',
			link: 'https://request.elche.us/',
		},
		{
			id: '5',
			name: "Anna's Archive",
			icon: 'book',
			link: 'https://annas-archive.org/search',
		},
		{
			id: '6',
			name: 'ABB',
			icon: 'headphones',
			link: 'https://audiobookbay.li/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Inspirational',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Classic',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Oldies',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
				{
					name: 'Rock',
					link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'Dribbble',
					link: 'https://www.dribbble.com',
				},
				{
					name: 'Trello',
					link: 'https://www.trello.com',
				},
				{
					name: 'Slack',
					link: 'https://www.slack.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
