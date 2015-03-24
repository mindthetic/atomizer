module.exports = {
    'custom': {
        uh: '79px',
        primary: '#f6a1e1',
        l: '$START',
        r: '$END'
    },
    breakPoints: {
        'sm': '@media(min-width:500px)',
        'md': '@media(min-width:900px)',
        'lg': '@media(min-width:1200px)'
    },
    'classNames': [
        // normal
        'Td-u',
        'Td-u:h',
        'Td-u--sm',
        // custom
        'foo>W-uh',
        'H-uh',
        'C-primary',
        // rtl
        'Fl-start',
        'Fl-end',
        'Fl-l',
        'Fl-r',
        // more lengthy then the previous one
        'W-1/12',
        'W-2/12',
        'W-3/12',
        'W-4/12',
        'W-5/12',
        'W-6/12',
        'W-7/12',
        'W-8/12',
        'W-9/12',
        'W-10/12',
        'W-11/12',
        'W-12/12',
        'W-1/12--sm'
    ]
};