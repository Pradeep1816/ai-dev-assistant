import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { WorkspaceModule } from './modules/workspace/workspace.module';
import { RepoModule } from './modules/repo/repo.module';
import { AiModule } from './modules/ai/ai.module';
import { KnowledgeModule } from './modules/knowledge/knowledge.module';
import { DebugModule } from './modules/debug/debug.module';

@Module({
  imports: [AuthModule, UserModule, WorkspaceModule, RepoModule, AiModule, KnowledgeModule, DebugModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
