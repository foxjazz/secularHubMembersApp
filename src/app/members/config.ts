/**
 * Created by fox21 on 12/30/2016.
 */
/**
 * Created by fox21 on 12/29/2016.
 */

export let config = {
    test: 'https://74.208.129.62:6984/members/',
    http: 'http://',
    joesystem: 'http://foxjazz:jackofall2@localhost:5984/members/',
    testuri: 'localhost:5984/members/',
    prod: '',
    db:'members',
    auth: 'foxjazz:jackofall2@',
    IP: '74.208.129.62'

};
export let rules = [
  {TermInMonths: 12,
    Amount: 45,
    MembershipType: "Regular"},
  {TermInMonths: 1, Amount: 5, MembershipType: "Regular"},
  {TermInMonths: 12, Amount: 75, MembershipType: "Family"}
];


export let confignjs = {
    hostlocal: 'https://foxjazz.org',
    testing: 'http://foxjazz.org:8080',
    production: 'https://foxjazz.org',
    hostlocalBackup: 'just add :8080  and http from https to test on the end'
};
