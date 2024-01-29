# OMF-Mobile
OMF is an online food blogging and food-ordering application.

## Overview

The mobile application is built using React-native. Here are the characteristics of the application:

*  It's a modular-monolith application based on DDD strategic design principles for UI.
  
*  Modules are divided based on DDD bounded-contexts.

*  The application will have unit tests and integration tests.

*  Etags will be used to enable caching of responses to reduce bandwidth and improve performance.

## Modules

  *  **accounts** - for user accounts/profiles etc.
  *  **billing** - for billing/invoicing.
  *  **configuration** - for system configuration and settings.
  *  **discussion** - for exchange of messages, related to a job, among clients.
  *  **files** - to upload attachments/images to/from storage e.g. AWS S3
  *  **notifications** - to send Email/SMS notifications to clients.
  *  **payment** - to make payment using a third-party payment gateway e.g. Stripe. 
  *  **reviews** - for user reviews and ratings.
  *  **Posts-reels** - the core module handling project/job/milestones and respective offers.
  *  **shared** - for any common functionality among modules.
