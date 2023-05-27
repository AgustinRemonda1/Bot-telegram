import React, { useMemo } from 'react';

const WithRequiredPermission = ({
  requiredPermission,
  userPermissions,
  children
}: any) => {
  const hasRequiredPermissions = useMemo(() => {
    return (
      !requiredPermission ||
      (userPermissions &&
        userPermissions.some((userPermission: any) =>
          userPermission.name.includes(requiredPermission)
        ))
    );
  }, [userPermissions, requiredPermission]);

  return <>{hasRequiredPermissions ? children : null}</>;
};

export default WithRequiredPermission;
