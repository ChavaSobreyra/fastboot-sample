export default {
    'app': {
        'meta': {
            'name': 'loan_platform',
            'version': '0.0.1'
        },
        'tenant': {
            'name': 'ABC Lenders Inc.',
            'id': 'abc'
        },
        'front_end': {
            'base_url': 'https://abc.carqualifier.com/'
        },
        'back_end': {
            'base_url': 'http://cq.dev:9000/v1'
        }
    },
    'services': {
        'session': {
            'actions': {
                'login': {
                    'method': 'GET',
                    'path': '/session'
                },
                'logout': {
                    'method': 'GET',
                    'path': '/session/logout'
                }
            }
        }
    }
};
