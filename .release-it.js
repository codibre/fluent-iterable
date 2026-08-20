/**
 * Custom changelog configuration for fluent-iterable monorepo.
 * 
 * Ensures GitHub compare links use the new scoped tag pattern:
 *   package-name@version (e.g., augmentative-iterable@1.6.0...augmentative-iterable@1.7.0)
 */

const baseConfig = require('./.release-it.base.json');

module.exports = {
  ...baseConfig,
  plugins: {
    ...baseConfig.plugins,
    '@release-it/conventional-changelog': {
      ...baseConfig.plugins['@release-it/conventional-changelog'],
      writerOpts: {
        ...baseConfig.plugins['@release-it/conventional-changelog'].writerOpts,
        
        // Build correct GitHub compare URL using new scoped tag pattern
        finalizeContext: (context) => {
          if (context.previousTag && context.tag && context.repo) {
            const pkgName = context.npm.name;
            const prevTag = context.previousTag.replace(/^v/, '');
            const currTag = context.tag.replace(/^v/, '');
            
            // Use scoped tag pattern: package-name@version
            context.compareUrl = `https://github.com/${context.repo.owner}/${context.repo.project}/compare/${pkgName}@${prevTag}...${pkgName}@${currTag}`;
          }
          
          return context;
        }
      }
    }
  }
};
