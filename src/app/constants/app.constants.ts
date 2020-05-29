export const LocalStorage = window.localStorage;
export const SessionStorage = window.sessionStorage;
export const SERVER_API_URL = 'http://localhost:4000/';

export const GENDER_TYPES = [
    {
        'genderKey': 'M', 'genderValue': 'Male'
    },
    {
        'genderKey': 'F', 'genderValue': 'Female'
    },
    {
        'genderKey': 'T', 'genderValue': 'Transgender'
    }
];

export const SALUTATION_TYPES = ['Mr.', 'Miss.', 'Mrs.', 'Mx.'];

export const USER_NAVIGATION_LINKS = [
    {
        'link': 'dashboard', 'title': 'Dashboard'
    }, {
        'link': 'profile', 'title': 'Profile'
    }, {
        'link': 'recent-activities', 'title': 'Recent Activities'
    }, {
        'link': 'donations', 'title': 'My Donations'
    }, {
        'link': 'complaints-queries', 'title': 'My Complaints/Queries'
    }
];

export const RECENT_ACTIVITIES_LINKS = [
    {
        label: 'Photo Gallery',
        path: './photo-gallery',
        index: 0
    },
    {
        label: 'Video Gallery',
        path: './video-gallery',
        index: 1
    }
]