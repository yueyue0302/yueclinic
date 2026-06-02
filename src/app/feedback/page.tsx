import type { Metadata } from 'next';
import FeedbackClient from './FeedbackClient';
import { clinicGoogleReviewUrl } from '../../lib/clinicMap';

export const metadata: Metadata = {
  title: 'ご来院後アンケート | yueclinic',
  description: 'yueclinicのご来院後アンケートページです。',
  robots: {
    index: false,
    follow: false,
  },
};

const reserveUrl = 'https://lin.ee/VqhBREq';

export default function FeedbackPage() {
  return (
    <FeedbackClient
      googleReviewUrl={clinicGoogleReviewUrl}
      lineUrl={reserveUrl}
    />
  );
}
