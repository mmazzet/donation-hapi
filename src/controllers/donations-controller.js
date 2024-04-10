import { db } from "../models/db.js";
export const donationsController = {
    index: {
        handler: async function (request, h) {
            const loggedInUser = request.auth.credentials;
            return h.view("Donate", { title: "Make a Donation", user: loggedInUser });
        },
    },
    donate: {
        handler: async function (request, h) {
            try {
                const loggedInUser = request.auth.credentials;
                const donationPayload = request.payload;
                const donation = {
                    amount: donationPayload.amount,
                    method: donationPayload.method,
                    donor: loggedInUser.email,
                    candidate: donationPayload.candidate,
                    lat: donationPayload.lat,
                    lng: donationPayload.lng,
                };
                await db.donationStore.add(donation);
                return h.redirect("/donate");
            }
            catch (err) {
                return h.view("main", { errors: [{ message: err.message }] });
            }
        },
    },
    report: {
        handler: async function (request, h) {
            const loggedInUser = request.auth.credentials;
            const donations = await db.donationStore.find();
            return h.view("Report", {
                title: "Report",
                user: loggedInUser,
                donations: donations,
            });
        },
    },
};
