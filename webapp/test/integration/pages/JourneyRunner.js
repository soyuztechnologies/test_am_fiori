sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"ztravelab/test/integration/pages/TravelList",
	"ztravelab/test/integration/pages/TravelObjectPage",
	"ztravelab/test/integration/pages/BookingObjectPage"
], function (JourneyRunner, TravelList, TravelObjectPage, BookingObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('ztravelab') + '/index.html',
        pages: {
			onTheTravelList: TravelList,
			onTheTravelObjectPage: TravelObjectPage,
			onTheBookingObjectPage: BookingObjectPage
        },
        async: true
    });

    return runner;
});

