
export interface IGetOwnersList {
    // $id:          string;
    pageNumber:   number;
    pageSize:     number;
    totalPages:   number;
    totalRecords: number;
    data:         IOwnerData[];
    succeeded:    boolean;
    errors:       null;
    message:      null;
}

export interface IOwnerData {
    // $id:     string;
    $values: IOwnerValue[];
}

export interface IOwnerValue {
    // $id:               string;
    owner_ID:          string;
    owner_FirstName:   string;
    owner_LastName:    string;
    owner_Mail:        string;
    owner_Address:     string;
    owner_About:       string;
    owner_DOB:         string;
    owner_Phone:       string;
    owner_WA_Number:   string;
    genderString:      string;
    gender:            number;
    nationalityString: string;
    nationality:       number;
    owner_Bank:        string;
    owner_BankAccount: string;
    owner_BankSwift:   string;
    owner_Photo:       string;
}
