import { PrismaClient, UserRole } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

const createAdmin = async (data: any) => {
  const hashedPassword: string = await bcrypt.hash(data.password, 12);
  console.log({ hashedPassword });
  //   console.log("user service", data);

  const userData = {
    email: data.admin.email,
    password: data.password,
    role: UserRole.ADMIN,
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    await transactionClient.user.create({
      data: userData,
    });
    // const createdUserData = await transactionClient.user.create({
    //   data: userData,
    // });

    const createdAdminData = await transactionClient.admin.create({
      data: {
        ...data.admin,
        password: hashedPassword,
      },
    });

    return createdAdminData;
  });
  return result;
};

export const userServive = {
  createAdmin,
};

// ? =============== v1 ===============
// const createAdmin = async () => {
//   return {
//     message: "admin created",
//   };
// };

// export const userServive = {
//   createAdmin,
// };
