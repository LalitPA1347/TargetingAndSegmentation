export interface DataFilesTablesType extends React.HTMLAttributes<HTMLDivElement> {
    tableTitle?: string;
    defaultTableShow?: boolean;
    dataFilesEntries: DataFilesType[];
    buttonVisibility?: ButtonVisibility;
    uploadOption?: UploadDownloadOptionType;
    downloadOption?: UploadDownloadOptionType;
}

interface UploadDownloadOptionType {
    optionVisibility: boolean;
    onClickButtonEvent?: () => void;
}

export interface ButtonVisibility {
    searchVisibility: boolean;
    filterVisibility: boolean;
    expandCollapseVisibility: boolean;
}

export interface DataFilesType {
    templateName: string;
    fileName: string;
    status: string;
    date: string;
};