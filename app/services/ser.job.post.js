/**
 * Created by Julius Alvarado on 9/17/2017.
 */

(function () {
    "use strict";

    angular.module('edhubJobsApp').factory('edhubJobPostService', [
        '$firebaseArray', 'edhubAuthService',
        EdhubJobPostClass
    ]);

    function EdhubJobPostClass($firebaseArray, edhubAuthService) {

        const refJobPostings = firebase.database().ref('jobPostings');
        const refOrgApplicants = firebase.database().ref('orgApplicants');
        const refApplicantJobApps = firebase.database().ref('applicantJobApps');
        const refOrganizations = firebase.database().ref('organizations');

        function jobPostingsLimitTo(limit) {
            const qJobPostingsLimitToOrderByDate =
                refJobPostings.orderByChild("timeStamp").limitToLast(limit);
            return $firebaseArray(qJobPostingsLimitToOrderByDate);
        }

        function listOrganization(orgData, orgId) {
            // TODO: seriously figure out / practice correctly returning this
            return $firebaseArray(refJobPostings.child(orgId)).$add(orgData).then(function (ref) {
                return ref;
            });
        }

        /**
         * Get firebase node
         * @param orgId
         * @returns {*}
         */
        function forOrg(orgId) {
            return $firebaseArray(refOrgApplicants.child(orgId));
        }

        function getOrganization (orgId) {
            return $firebaseArray(refOrganizations.child(orgId));
        }

        function returnAllOrganizations () {
            return $firebaseArray(refOrganizations);
        }

        function forApplicants(applicantId) {

        }
        
        function applicantJobApplication() {

        }

        return {
            jobPostings: $firebaseArray(refJobPostings),
            jobPostingsLimitTo: jobPostingsLimitTo,
            forOrg: forOrg,
            listOrganization: listOrganization,
            forApplicants: forApplicants,
            applicantJobApplication: applicantJobApplication,
            getOrganization: getOrganization,
            returnAllOrganizations: returnAllOrganizations
        };
    }
}());


