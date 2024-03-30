import { ActionIcon, Button, Card, SimpleGrid } from '@mantine/core';
import { Disc, Pencil, Plus, Trash, X } from '@phosphor-icons/react';
import AppLayout from 'components/common/app-layout/app-layout';
import NavigationRoutes from 'components/common/side-navigation/navigations';
import { useFormState } from 'components/form';
import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

interface FormLayoutProps {
  children: React.ReactNode;
  onDelete?: Function;
}

export function FormLayout({ children, onDelete }: FormLayoutProps) {
  const { disabled, setDisabled } = useFormState();
  const { reset, getValues } = useFormContext();
  const isEdit = !!getValues('data');
  const cancelButton = !disabled && isEdit && (
    <Button
      color="red"
      variant="outline"
      rightSection={<X size={16} />}
      onClick={() => {
        reset();
        setDisabled(true);
      }}
    >
      Batal
    </Button>
  );

  const submitButton = !disabled && (
    <Button rightSection={<Disc size={16} />} type="submit">
      Simpan
    </Button>
  );

  const editButton = isEdit && disabled && (
    <Button
      rightSection={<Pencil size={16} />}
      onClick={() => setDisabled(false)}
    >
      Edit
    </Button>
  );

  const deleteButton =
    disabled && onDelete
      ? ({
          onClick: onDelete,
          children: <Trash size={16} />,
          color: 'red',
          variant: 'subtle',
        } as React.ComponentProps<typeof ActionIcon<'button'>>)
      : undefined;

  const cols = disabled || !isEdit ? 1 : 2;
  const bottomContainer = (
    <Card withBorder>
      <SimpleGrid cols={cols} w="100%" maw={768} m="auto">
        {editButton}
        {cancelButton}
        {submitButton}
      </SimpleGrid>
    </Card>
  );
  return (
    <AppLayout
      back
      mainContainerProps={{
        h: 'calc(100dvh - 55px - 85px)',
        padding: 16,
      }}
      rightIconProps={deleteButton}
      bottomContainer={bottomContainer}
    >
      {children}
    </AppLayout>
  );
}

interface ListLayoutProps {
  children: React.ReactNode;
  createNavigation: NavigationRoutes;
}

export function ListLayout({ children, createNavigation }: ListLayoutProps) {
  const { push } = useRouter();
  return (
    <AppLayout
      back
      rightIconProps={{
        onClick: () => push(createNavigation),
        children: <Plus size={16} />,
      }}
    >
      {children}
    </AppLayout>
  );
}
