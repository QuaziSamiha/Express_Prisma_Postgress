import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllFromDB = async (params: any) => {
  const andConditions: Prisma.AdminWhereInput[] = [];
  //   console.log(params);
  const { searchTerm, ...filteredData } = params;
  console.log("Filtered data", filteredData);

  console.dir(andConditions, { depth: "infinity" });

  if (Object.keys(filteredData).length > 0) {
    andConditions.push({
      AND: Object.keys(filteredData).map((field) => ({
        [field]: {
          equals: filteredData[field],
        },
      })),
    });
  }

  const whereConditions: Prisma.AdminWhereInput = { AND: andConditions };

  const result = await prisma.admin.findMany({
    where: whereConditions,
  });

  return result;
};

export const adminService = {
  getAllFromDB,
};

// ? =============== V5 (FILTERING WITH SPECIFIC FIELD) ==================
// const prisma = new PrismaClient();

// const getAllFromDB = async (params: any) => {
//   const andConditions: Prisma.AdminWhereInput[] = [];
//   //   console.log(params);
//   const { searchTerm, ...filteredData } = params;
//   console.log("Filtered data", filteredData);

//   console.dir(andConditions, { depth: "infinity" });

//   if (Object.keys(filteredData).length > 0) {
//     andConditions.push({
//       AND: Object.keys(filteredData).map((field) => ({
//         [field]: {
//           equals: filteredData[field],
//         },
//       })),
//     });
//   }

//   const whereConditions: Prisma.AdminWhereInput = { AND: andConditions };

//   const result = await prisma.admin.findMany({
//     where: whereConditions,
//   });

//   return result;
// };

// export const adminService = {
//   getAllFromDB,
// };

// ? =============== V4 (ANY FIELD CAN BE FILTERED - MORE OPTIMIZED) ==================
// const prisma = new PrismaClient();

// const getAllFromDB = async (params: any) => {
//   const andConditions: Prisma.AdminWhereInput[] = [];

//   if (params.searchTerm) {
//     andConditions.push({
//       OR: ["name", "email"].map((field) => ({
//         [field]: {
//           contains: params.searchTerm,
//           mode: "insensitive", //? case insensitive
//         },
//       })),
//     });
//   }

//   console.dir(andConditions, { depth: "infinity" });

//   const whereConditions: Prisma.AdminWhereInput = { AND: andConditions };

//   const result = await prisma.admin.findMany({
//     where: whereConditions,
//   });

//   return result;
// };

// export const adminService = {
//   getAllFromDB,
// };

// ? =============== V3 (ANY FIELD CAN BE FILTERED - OPTIMIZED) ===============
// const prisma = new PrismaClient();

// const getAllFromDB = async (params: any) => {
//   const andConditions: Prisma.AdminWhereInput[] = [];

//   if (params.searchTerm) {
//     andConditions.push({
//       OR: [
//         {
//           name: {
//             contains: params.searchTerm,
//             mode: "insensitive", //? case insensitive
//           },
//         },
//         {
//           email: {
//             contains: params.searchTerm,
//             mode: "insensitive", //? case insensitive
//           },
//         },
//       ],
//     });
//   }

//   console.dir(andConditions, { depth: "infinity" });

//   const whereConditions: Prisma.AdminWhereInput = { AND: andConditions };

//   const result = await prisma.admin.findMany({
//     where: whereConditions,
//   });

//   return result;
// };

// export const adminService = {
//   getAllFromDB,
// };

// ? =============== V2 (SINGLE FIELD CAN BE FILTERED - CASE SENSITIVE AND CASE INSENSITIVE) ===============
// const prisma = new PrismaClient();

// const getAllFromDB = async () => {
//   const result = await prisma.admin.findMany();
//   return result;
// };

// const getBySearchFromDB = async (params: any) => {
//   console.log(params);
//   const result = await prisma.admin.findMany({
//     where: {
//       //? ========== v2 ========
//       name: {
//         contains: params.searchTerm,
//         mode: "insensitive", //? case insensitive
//       },
//       //? ========== v1 ========
//       //   name: {
//       //     contains: params.searchTerm,
//       //   },
//     },
//   });
//   return result;
// };

// export const adminService = {
//   getAllFromDB,
//   getBySearchFromDB,
// };

// ? =============== V1 ===============
// const prisma = new PrismaClient();

// const getAllFromDB = async () => {
//   const result = await prisma.admin.findMany();
//   return result;
// };

// export const adminService = {
//   getAllFromDB,
// };
