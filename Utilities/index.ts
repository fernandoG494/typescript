interface IUser {
    id: string,
    email: string,
    password: string,
    firstName: string,
    middleName: string,
    lastName: string,
    dateOfBirth: string,
    phoneNumber: string,
}

type Step1 = Pick<IUser, "email" | "password"> & { confirmPassword: string };
type Step2 = Pick<IUser, "firstName" | "middleName" | "lastName" | "dateOfBirth" | "phoneNumber">;

type Step1WithOmit = Omit<IUser, "firstName" | "middleName" | "lastName" | "dateOfBirth" | "phoneNumber">;
