// model User {
//   id              String   @id @default(cuid())
//   name            String
//   email           String?  @unique
//   phone           String?  @unique
//   password        String?
//   role            Role     @default(USER)
//   providerProfile Provider?
//   subscriptions   Subscription[]
//   orders          Order[]
//   createdAt       DateTime @default(now())
// }

// model Provider {
//   id              String   @id @default(cuid())
//   userId          String   @unique
//   user            User     @relation(fields: [userId], references: [id])
//   type            ProviderType
//   displayName     String
//   description     String?
//   address         Json
//   verification    VerificationStatus @default(PENDING)
//   documents       Json?
//   dailyCapacity   Int?
//   rating          Float?   @default(0)
//   menus           Menu[]
//   orders          Order[]
//   createdAt       DateTime @default(now())
// }

// model Menu {
//   id          String   @id @default(cuid())
//   providerId  String
//   provider    Provider @relation(fields: [providerId], references: [id])
//   title       String
//   description String?
//   price       Float
//   cycle       PlanCycle
//   images      String[]
//   available   Boolean   @default(true)
//   cutoffTime  DateTime?
//   createdAt   DateTime  @default(now())
// }

// model Subscription {
//   id           String   @id @default(cuid())
//   userId       String
//   menuId       String
//   providerId   String
//   startDate    DateTime
//   status       SubscriptionStatus @default(ACTIVE)
//   billingCycle PlanCycle
//   autoDebit    Boolean @default(true)
//   trial        Boolean @default(false)
//   nextRenewal  DateTime
//   createdAt    DateTime @default(now())

//   user       User     @relation(fields: [userId], references: [id])
//   provider   Provider @relation(fields: [providerId], references: [id])
//   menu       Menu     @relation(fields: [menuId], references: [id])
// }

// model Order {
//   id          String   @id @default(cuid())
//   userId      String
//   providerId  String
//   status      OrderStatus @default(PLACED)
//   deliveryMode DeliveryMode
//   deliveryAddress Json
//   totalAmount Float
//   createdAt   DateTime @default(now())
//   updatedAt   DateTime @updatedAt

//   user      User     @relation(fields: [userId], references: [id])
//   provider  Provider @relation(fields: [providerId], references: [id])
// }

// enum Role {
//   ADMIN
//   USER
//   RESTAURANT
//   HOMECHEF
// }

// enum ProviderType {
//   RESTAURANT
//   HOMECHEF
// }

// enum VerificationStatus {
//   PENDING
//   APPROVED
//   REJECTED
// }

// enum PlanCycle {
//   DAILY
//   WEEKLY
//   MONTHLY
// }

// enum SubscriptionStatus {
//   ACTIVE
//   PAUSED
//   CANCELLED
// }

// enum OrderStatus {
//   PLACED
//   PREPARING
//   READY
//   OUT_FOR_DELIVERY
//   DELIVERED
//   CANCELLED
// }

// enum DeliveryMode {
//   PICKUP
//   DELIVERY
// }
