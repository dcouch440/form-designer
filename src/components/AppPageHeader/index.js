import React from 'react'

import {
  PageHeader
} from './styles';

export default function AppPageHeader ({ title }) {
  return (
    <PageHeader>
      { title }
    </PageHeader>
  );
}
