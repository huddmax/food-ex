import fs from 'fs';
import path from 'path';
import { uploadConfig } from '../configs/upload';

class DiskStorage {
    async saveFile(file: string): Promise<string> {
        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER, file),
            path.resolve(uploadConfig.UPLOAD_FOLDER, file)
        );

        return file;
    }

    async deleteFile(file: string): Promise<void> {
        const filePath = path.resolve(uploadConfig.UPLOAD_FOLDER, file);

        try {
            await fs.promises.stat(filePath);
        } catch {
            return;
        }

        await fs.promises.unlink(filePath);
    }
}


export { DiskStorage };