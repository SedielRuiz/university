import { Injectable, Logger } from '@nestjs/common'
import { TeacherRepository } from '@repository/teacher.repository';
import { Teachers } from 'src/domain/entities/teachers.entity';
import { ConsultTeacherRequest } from 'src/requests/requesters/teacher.request';

@Injectable()
export class TeacherService {
    private readonly logger = new Logger(TeacherService.name);

    constructor(private teacherRepository: TeacherRepository) {}

    async all (filter: Partial<ConsultTeacherRequest>): Promise<Teachers[]> {
        return await this.teacherRepository.all(filter)
    }

    async findOne(filter: Partial<ConsultTeacherRequest>): Promise<Teachers> {
        return await this.teacherRepository.findOne(filter)
    }
}
