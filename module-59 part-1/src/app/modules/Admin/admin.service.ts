import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllFromDB = async () => {
  const result = await prisma.admin.findMany();
  return result;
};

const getBySearchFromDB = async (params: any) => {
  console.log(params);
  const result = await prisma.admin.findMany({
    where: {
      OR: [
        {
          name: {
            contains: params.searchTerm,
            mode: "insensitive", //? case insensitive
          },
        },
        {
          email: {
            contains: params.searchTerm,
            mode: "insensitive", //? case insensitive
          },
        },
      ],
    },
  });
  return result;
};

export const adminService = {
  getAllFromDB,
  getBySearchFromDB,
};

// ? =============== v2 ===============
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

// ? =============== v1 ===============
// const prisma = new PrismaClient();

// const getAllFromDB = async () => {
//   const result = await prisma.admin.findMany();
//   return result;
// };

// export const adminService = {
//   getAllFromDB,
// };
