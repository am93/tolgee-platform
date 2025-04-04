import {
  checkPermissions,
  RUN,
  SKIP,
  visitProjectWithPermissions,
} from '../../../common/permissions/main';

describe('Permissions translations 2', () => {
  it('translations.state-edit', () => {
    visitProjectWithPermissions(
      { scopes: ['translations.state-edit'] },
      true
    ).then((projectInfo) => {
      checkPermissions(projectInfo, {
        'project-menu-item-dashboard': RUN,
        'project-menu-item-export': RUN,
      });
    });
  });

  it('translation-comments.add', () => {
    visitProjectWithPermissions(
      { scopes: ['translation-comments.add'] },
      true
    ).then((projectInfo) => {
      checkPermissions(projectInfo, {
        'project-menu-item-dashboard': SKIP,
        'project-menu-item-translations': RUN,
        'project-menu-item-export': SKIP,
        'project-menu-item-integrate': SKIP,
      });
    });
  });

  it('translation-comments.edit', () => {
    visitProjectWithPermissions(
      { scopes: ['translation-comments.edit'] },
      true
    ).then((projectInfo) => {
      checkPermissions(projectInfo, {
        'project-menu-item-dashboard': SKIP,
        'project-menu-item-translations': RUN,
        'project-menu-item-export': SKIP,
        'project-menu-item-integrate': SKIP,
      });
    });
  });

  it('translation-comments.set-state', () => {
    visitProjectWithPermissions(
      {
        scopes: ['translation-comments.set-state'],
      },
      true
    ).then((projectInfo) => {
      checkPermissions(projectInfo, {
        'project-menu-item-dashboard': SKIP,
        'project-menu-item-translations': RUN,
        'project-menu-item-export': SKIP,
        'project-menu-item-integrate': SKIP,
      });
    });
  });
});
